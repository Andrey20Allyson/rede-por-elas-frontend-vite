import { Link } from "react-router-dom";

export interface CategoryCardProps {
  id: number;
  name: string;
}

export function CategoryCard(props: CategoryCardProps) {
  return (
    <Link to={`/categoria/${props.id}`}>{props.name}</Link>
  );
}