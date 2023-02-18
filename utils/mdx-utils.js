import { api } from './../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');
  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  const posts = await getPosts();
  const data = posts.filter((post) => post.id === id);

  if (data) {
    return data[0];
  }

  return { title: 'Encontramos algum problema na requisição dos dados!' };
};
