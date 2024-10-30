interface ButtonProps {
  bgColor: string;
  textColor: string;
  children: string;
}

export function Button({
  bgColor = "bg-red-700",
  textColor = "text-neutral-400",
  children
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} ${textColor} px-2 py-1 rounded hover:bg-blue-700 hover:text-neutral-50 transition-colors`}
    >
      {children}
    </button>
  );
}

// interface ButtonProps {
//   styledButton: {
//     bgColor: string,
//     textColor: string,
//   }
// }
//
// export function Button({styledButton}: ButtonProps){
//   return <button className={`${styledButton.bgColor} ${styledButton.textColor} px-2 py-1 rounded hover:bg-blue-700 hover:text-neutral-50 transition-colors`}>Click me !</button>
// }
