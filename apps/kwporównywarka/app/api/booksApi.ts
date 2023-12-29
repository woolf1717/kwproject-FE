type Book = {
  departmentCode: string;
  bookNumber: string;
  controlNumber: string;
};

export const getBook = async (id: string) => {
  const response = await fetch(`http://localhost:3000/book/${id}`, {
    cache: 'no-store',
  });

  return await response.json();
};

export const getBooks = async () => {
  const response = await fetch('http://localhost:3000/book', {
    cache: 'no-store',
  });

  return await response.json();
};

export const addBook = async (book: Book) => {
  const response = await fetch('http://localhost:3000/book', {
    cache: 'no-store',
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });

  return await response.json();
};

export const removeBook = async (id: string) => {
  if (id === '0') return;

  const response = await fetch(`http://localhost:3000/book/${id}`, {
    method: 'DELETE',
  });

  return await response.json();
};

export const compareBooks = async (id: string, idTwo: string) => {
  const response = await fetch(
    `http://localhost:3000/book/compare/${id}/${idTwo}`,
    {
      method: 'GET',
    }
  );
  return await response.json();
};
