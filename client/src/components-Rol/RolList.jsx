import { useEffect, useState } from "react";
import { RolCard } from "./RolCard";
import { getAllRoles } from "../api/rol.api";

export function RolList() {

    const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function loadRoles() {
      const res = await getAllRoles();
      setRoles(res.data);
    }
    loadRoles();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
    {roles.map(rol => (
        <RolCard key={rol.idRol} rol={rol} />
    ))}
  </div>
  );
}
