interface InfoItemProps {
    label: string;
    value: string;
 }
 
 export const InfoItem = ({ label, value }: InfoItemProps) => (
    <div>
        <span className="font-medium text-gray-600">{label}: </span>
        <span>{value}</span>
    </div>
 );