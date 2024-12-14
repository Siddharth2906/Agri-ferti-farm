// src/components/ui/card.js
export const Card = ({ children, className, ...props }) => (
    <div className={`p-4 bg-white shadow rounded ${className}`} {...props}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ children, className, ...props }) => (
    <div className={`pb-2 border-b ${className}`} {...props}>
      {children}
    </div>
  );
  
  export const CardTitle = ({ children, className, ...props }) => (
    <h2 className={`text-xl font-bold ${className}`} {...props}>
      {children}
    </h2>
  );
  
  export const CardContent = ({ children, className, ...props }) => (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
  