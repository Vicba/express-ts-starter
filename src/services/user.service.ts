// create mock getMe function in typescript

export const getMe = async (userId: string) => {
  return {
    id: userId,
    email: "test@test.com",
    role: "user",
  };
};
