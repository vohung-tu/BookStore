import { BookDetails } from './books-details.model'; // Đường dẫn tới interface Book

export const MOCK_BOOKS: BookDetails[] = [
  {
    book_id: 1,
    title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark",
    author: "LAM",
    description: "A classic novel set in the 1920s about the American dream.",
    price: 86,
    flashsale_price: 76,
    discount_percent: 10,
    coverImage: "assets/images/flashsale_1.jpg",
    publishedDate: new Date("1925-04-10")
  },
  {
    book_id: 2,
    title: "One Piece - Tập 104 - “Kozuki Momonosuke... ",
    author: "Eiichiro Oda",
    description: "A dystopian novel about totalitarianism and surveillance.",
    price: 185,
    flashsale_price: 135,
    discount_percent: 10,
    coverImage: "assets/images/flashsale_2.jpg",
    publishedDate: new Date("1949-06-08")
  },
  {
    book_id: 3,
    title: "550 Bài Luyện Đọc Hiểu - Đọc Điền Tiếng Anh",
    author: "Trang Anh",
    description: "A novel focused on racial injustice in the American South.",
    price: 250,
    flashsale_price: 189,
    discount_percent: 10,
    coverImage: "assets/images/flashsale_3.jpg",
    publishedDate: new Date("1960-07-11")
  },
  {
    book_id: 4,
    title: "Bài Học Cuộc Sống Từ 'Anh Hai' Uramichi - Tập 1...",
    author: "Gaku Kuze",
    description: "A romantic novel that also critiques the British class system.",
    price: 30,
    flashsale_price: 27,
    discount_percent: 10,
    coverImage: "assets/images/flashsale_4.jpg",
    publishedDate: new Date("1813-01-28")
  },
  {
    book_id: 5,
    title: "Anh Em Phi Hành Gia - Tập 28",
    author: "Chuya Koyama",
    description: "A romantic novel that also critiques the British class system.",
    price: 45,
    flashsale_price: 32.850,
    discount_percent: 8,
    coverImage: "assets/images/flashsale_5.jpg",
    publishedDate: new Date("1813-01-28")
  }
];
