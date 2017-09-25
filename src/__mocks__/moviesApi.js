export const resultMovies = [{ id: 1 }];
export const errorKeyword = '***';

export const search = async (keyword) => {
  if (keyword === errorKeyword) {
    throw new Error(400);
  }

  return resultMovies;
};

