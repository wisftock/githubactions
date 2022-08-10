interface Props {
  title: string;
}
const Botons = ({ title }: Props) => {
  return <button>{title}</button>;
};

export { Botons };
