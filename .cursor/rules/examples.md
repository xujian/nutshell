# NS Component Formatting

This rule applies when writing any component that follows the `<ns-xxx>` naming pattern.

## Component Prop Formatting

When writing or editing any `<ns-xxx>` component, always format the props with each prop on its own line:

```tsx
// CORRECT
<ns-component
  prop1="value1"
  prop2="value2"
  prop3={someValue}
  onEvent={() => handleEvent()} />

// INCORRECT
<ns-component prop1="value1" prop2="value2" prop3={someValue} />
```

This formatting rule applies regardless of the number of props. Even components with only a few props should follow this pattern for consistency.

## Additional Notes

- The closing bracket must be on the same line as the last prop, even if the component has children.
- This rule applies to all components that match the `<ns-xxx>` pattern where xxx is any component name
- When modifying existing code, ensure it's updated to follow this pattern 
- No comments for vue pages