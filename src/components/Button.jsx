const Button = ({label,iconURL}) => {
  return (
    <button className="">
      {label}

      <img 
       src= {iconURL}
       alt="arrowRighticon"
       className="ml-2 "
      />
    </button>
  )}

export default Button