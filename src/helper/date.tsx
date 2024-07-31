export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };

 export const getTime = (dateTime: string): string => {
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
  };