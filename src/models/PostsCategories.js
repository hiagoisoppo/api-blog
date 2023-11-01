const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostsCategoriesTable = sequelize.define('BlogPost', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostsCategoriesTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      through: PostsCategoriesTable
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
      through: PostsCategoriesTable
    });
  };

  return PostsCategoriesTable;
}

module.exports = PostsCategoriesSchema;