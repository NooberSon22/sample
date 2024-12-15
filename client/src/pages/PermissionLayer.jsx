// role
// permission

import AuthStore from "../state/auth";

const PermissionLayer = ({ permission, children }) => {
  const auth = AuthStore();
  
  const checkHasPermission = () => auth.permissions.includes(permission);

  return checkHasPermission() ? children : null;
};

export default PermissionLayer;
