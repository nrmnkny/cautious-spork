module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!(axios)/)" // Add other packages here if needed
    ],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };
  