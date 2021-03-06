const COLORS = ['primary', 'secondary', 'muted'];

const Button = ({
  children,
  onClick,
  icon = true,
  color = 'primary',
  type = 'button',
  className = '',
  ...attrs
}) => {
  const btnColor = COLORS.includes(color) ? color : COLORS[0];

  return (
    <button
      className={`btn btn--${btnColor} btn--${
        icon ? 'icon' : 'text'
      } ${className}`}
      onClick={onClick}
      type={type}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
