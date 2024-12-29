# React 19 useState Hook: Unexpected Behavior with Nested Objects

This repository demonstrates a common issue encountered when using the `useState` hook in React 19 with nested objects.  The problem arises from an incorrect approach to updating the nested object's properties, leading to unexpected behavior and preventing correct state updates.

## Bug Description
The `MyComponent` attempts to update a nested object within the component's state.  However, a naive approach to updating this nested object results in only the top-level properties being correctly updated, while changes to the nested `address` object are not reflected in the UI.

## Solution
The solution involves correctly updating the nested state using the functional update syntax of `useState` and the spread operator to ensure that all existing properties of the nested object are preserved while modifying the target property.