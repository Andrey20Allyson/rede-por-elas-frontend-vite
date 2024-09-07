export interface ServiceInfoProps {
  name: string;
  phone: string;
}

export function ServiceInfo(props: ServiceInfoProps) {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.phone}</p>
    </li>
  );
}