/**
 *
 * @param WrappedComponent
 * @returns {*}
 */
function wrapperFunctions(WrappedComponent) {
  /**
   * It doesn't matter what the wrapped component is - to have access to mappings,
   * it has to be wrapped in a mobx 'Injector'. There's a more dependable way to do this using
   * the commented out imports above (unwrapComponent, resolveComponent), but it still needs work.
   */
  let wrappedComponent = (WrappedComponent.hasOwnProperty('wrappedComponent')) ? WrappedComponent.wrappedComponent : WrappedComponent

  Object.defineProperties(wrappedComponent.prototype, assign({}, VehicleModulesDecorator, CatalogVehicleSummaryDecorator))

  if (WrappedComponent.hasOwnProperty('wrappedComponent')) {
    WrappedComponent.wrappedComponent = wrappedComponent
  } else {
    WrappedComponent = wrappedComponent
  }

  // Return the decorated instance
  return WrappedComponent
}

function componentIsWrappedWithInjector(component) {
  return component.hasOwnProperty('wrappedComponent')
}

function instanceIsWrappedWithInjector(component) {
  return component.hasOwnProperty('wrappedInstance')
}

function isFormComponent(component) {
  return component.hasOwnProperty('component')
}

function resolveComponent(component) {
  if (componentIsWrappedWithInjector(component)) {
    return component.wrappedComponent
  } else if (instanceIsWrappedWithInjector(component)) {
    return component.wrappedInstance
  } else if (isFormComponent(component)) {
    return component.component
  }

  return component
}

function unwrapComponent(target) {
  if (typeof target === 'undefined' || target === null) {
    throw new Error('Cannot unwrap target - invalid target provided')
  }

  // If the target isn't wrapped, just return it, it's all good
  if (!isFormComponent(target) &&
    !instanceIsWrappedWithInjector(target) &&
    !componentIsWrappedWithInjector(target)) {
    return target
  }

  // Otherwise, resolve the component and test the result again
  return unwrapComponent(resolveComponent(target))
}

export default wrapperFunctions
export { INVENTORY_MODULES as modules, modulesMap }
