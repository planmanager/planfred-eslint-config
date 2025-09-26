# planfred-eslint-config

Shared ESLint configurations for the Planfred monorepo.

## Available Configurations

### Base Configuration

The base configuration includes common rules and plugins used across all projects:

- Standard JavaScript rules
- Import/export rules
- Node.js specific rules
- Promise handling rules
- Stylistic rules

### Vue Configuration

Extends the base configuration with Vue.js specific rules:

- Vue component rules
- Template-specific styling rules
- Component naming conventions
- Vue-specific import path rules

### Cypress Configuration

Extends the base configuration with Cypress testing rules:

- TypeScript support
- Cypress-specific globals and rules
- Test-specific linting rules

### Test Configuration

Extends the base configuration with testing framework rules:

- Vitest support
- Test-specific globals
- Testing best practices

## Usage

### In ESLint Config Files

```javascript
// For base configuration
import baseConfig from '@planfred/eslint-config/base'

export default [
  ...baseConfig,
  // your specific overrides
]

// For Vue projects
import vueConfig from '@planfred/eslint-config/vue'

export default [
  ...vueConfig,
  // your specific overrides
]

// For Cypress tests
import cypressConfig from '@planfred/eslint-config/cypress'

export default [
  ...cypressConfig,
  // your specific overrides
]

// For test files
import testConfig from '@planfred/eslint-config/test'

export default [
  ...testConfig,
  // your specific overrides
]
```

### Package.json Dependencies

Add the shared config as a dependency in your package.json using the GitHub repository URL:

```json
{
  "dependencies": {
    "@planfred/eslint-config": "git+https://github.com/planfred/eslint-config.git"
  }
}
```

Alternatively, you can use a specific version or branch:

```json
{
  "dependencies": {
    "@planfred/eslint-config": "git+https://github.com/planfred/eslint-config.git#v1.0.0"
  }
}
```

## Configuration Structure

The shared configurations are organized as follows:

- `base.js` - Core configuration with common rules
- `vue.js` - Vue.js specific configuration extending base
- `cypress.js` - Cypress testing configuration extending base
- `test.js` - General testing configuration extending base

Each configuration can be extended and overridden as needed in individual projects.
