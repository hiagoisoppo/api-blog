const db = require('../models');
const { BlogPost, PostCategory } = require('../models');
const { createSchema } = require('../validations/post.schemas');

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

module.exports = {
  create,
};