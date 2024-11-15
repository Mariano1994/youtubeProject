import { faker } from "@faker-js/faker";

export const commentsData = Array.from({ length: 20 }).map(() => {
  return {
    id: faker.string.uuid(),
    userimage: faker.image.avatar(),
    username: faker.person.fullName(),
    comment: faker.word.words({ count: { min: 10, max: 50 } }),
    repleis: [],
  };
});
