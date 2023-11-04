const db = require('../models');
const { BlogPost, PostCategory, User, Category } = require('../models');
const { createSchema, updateSchema } = require('../validations/post.schemas');

const create = async ({ title, content, categoryIds, userId }) => {
  const transaction = await db.sequelize.transaction();
  const newPost = { title, content, categoryIds, userId };

  const { error } = createSchema.validate(newPost);
  if (error) {
    return { statusCode: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }

  try {
    const post = await BlogPost.create({
      ...newPost, published: new Date(), updated: new Date() }, { transaction });

    const promises = categoryIds.map((categoryId) =>
      PostCategory.create({ categoryId, postId: post.dataValues.id }, { transaction }));
    await Promise.all(promises);
    
    await transaction.commit();
    return { statusCode: 'CREATED', data: post.dataValues };
  } catch (err) {
    await transaction.rollback();
    return { statusCode: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
};

const listAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { statusCode: 'SUCCESSFUL', data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { statusCode: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  return { statusCode: 'SUCCESSFUL', data: post };
};

const update = async ({ postId, userId, title, content }) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) return { statusCode: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  if (post.userId !== userId) {
    return { statusCode: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  const { error } = updateSchema.validate({ title, content });
  if (error) {
    return { statusCode: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }

  await BlogPost.update({ title, content }, { where: { id: postId } });
  
  const updatedPost = await BlogPost.findByPk(postId, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { statusCode: 'SUCCESSFUL', data: updatedPost };
};

const destroy = async ({ postId, userId }) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) return { statusCode: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  if (post.userId !== userId) {
    return { statusCode: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  await BlogPost.destroy({ where: { id: postId } });
  return { statusCode: 'NO_CONTENT' };
};

module.exports = {
  create,
  listAll,
  findById,
  update,
  destroy,  
};