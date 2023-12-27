import { FC, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Book } from '../../../types/book';
import BookEditOptions from './BookEditOptions';
import { Container } from 'react-bootstrap';
import { compiler } from 'markdown-to-jsx';
import { getBook } from '../../../api/booksApi';

type BookOnDisplayProps = {
  bookId: string;
};

const BookOnDisplay: FC<BookOnDisplayProps> = ({ bookId }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [currentBook, setCurrentBook] = useState<Book | undefined>();

  const chapters = [
    { section: 'sectionZero', name: 'Okładka' },
    { section: 'sectionOneDesignation', name: 'Dział I-O' },
    { section: 'sectionOneRightsList', name: 'Dział I-SP' },
    { section: 'sectionTwo', name: 'Dział II' },
    { section: 'sectionThree', name: 'Dział III' },
    { section: 'sectionFour', name: 'Dział IV' },
  ];

  useEffect(() => {
    if (bookId === '' || bookId === 'Choose book you want to see.') {
      router.push(pathname);
    } else {
      router.push(
        pathname + '?' + createQueryString('section', chapters[0].section)
      );
    }
    const currentBookFetch = async () => {
      setCurrentBook(await getBook(bookId));
    };
    if (bookId === '' || bookId === 'Choose book you want to see.') return;
    else currentBookFetch();
  }, [bookId]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const chaptersNav = () => {
    return chapters.map((chapter, i) => (
      <button
        key={i}
        className={`btn btn-outline-primary ${
          searchParams.get('section') === chapter.section ? 'active' : ''
        }`}
        onClick={() =>
          router.push(
            pathname + '?' + createQueryString('section', chapter.section)
          )
        }
      >
        {chapter.name}
      </button>
    ));
  };
  return (
    <Container>
      <BookEditOptions />
      {bookId ? (
        <>
          <h2 className="pt-5">{currentBook?.title}</h2>
          <div>{chaptersNav()}</div>
          {bookId !== '' &&
            currentBook! &&
            compiler(
              searchParams.get('section') !== null
                ? currentBook[searchParams.get('section')! as keyof Book]
                : currentBook.sectionZero
            )}
          <button
            onClick={() =>
              router.push(
                pathname +
                  '?' +
                  createQueryString('section', chapters[0].section)
              )
            }
          >
            Powrót
          </button>
        </>
      ) : (
        ''
      )}
    </Container>
  );
};

export default BookOnDisplay;
