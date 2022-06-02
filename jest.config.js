module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>", "<rootDir>/src/"],
  modulePaths: ["<rootDir>", "<rootDir>/src/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironment: "jest-environment-jsdom",
};