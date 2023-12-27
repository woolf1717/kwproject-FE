import { useRouter } from 'next/navigation';

const BookEditOptions = () => {
  const router = useRouter();

  const options = [
    {
      name: 'Add new book',
      handler: () => {
        router.push('addABook');
      },
    },
    {
      name: 'Remove book',
      handler: () => {
        throw alert('Remove book');
      },
    },
    {
      name: 'Compare book',
      handler: () => {
        throw alert('Compare book');
      },
    },
    {
      name: 'Monitore book',
      handler: () => {
        throw alert('Monitore book');
      },
    },
  ];

  return (
    <>
      {options.map((option, i) => (
        <button key={i} onClick={option.handler}>
          {option.name}
        </button>
      ))}
      ;
    </>
  );
};

export default BookEditOptions;
