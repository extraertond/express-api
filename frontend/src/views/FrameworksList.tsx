import React, { useState, useEffect } from "react";

// Interfaces
import IFramework from "../interfaces/IFramework";

const FrameworksList: React.FC = () => {

  const [frameworks, setFrameworks] = useState<IFramework[]>([]);

  useEffect(() => {
   
  }, []);


  return (
    <div>
      Listado de Frameworks
    </div>
  );
};

export default FrameworksList;
