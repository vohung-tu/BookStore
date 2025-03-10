import { BookDetails } from './books-details.model'; // Đường dẫn tới interface Book

export const MOCK_BOOKS: BookDetails[] = [
  {
    book_id: 1,
    title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark",
    author: "LAM",
    description: "Những cơn gió heo may len lỏi vào từng góc phố nhỏ, mùa thu về gợi nhớ bao yêu thương đong đầy, bao xúc cảm dịu dàng của ký ức. Đó là nỗi nhớ đau đáu những hương vị quen thuộc của đồng nội, là hoài niệm bất chợt khi đi trên con đường cũ in dấu bao kỷ niệm... để rồi ta ước có một chuyến tàu kỳ diệu trở về những năm tháng ấy, trở về nơi nương náu bình yên sau những tháng ngày loay hoay để học cách trở thành một người lớn. Bạn sẽ được đắm mình trong những cảm xúc đẹp đẽ xen lẫn những tiếc nuối đầy lắng đọng trong “Trốn lên mái nhà đẻ khóc” của Lam...",
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
    description: "Phần 1: Hướng dẫn làm các dạng bài đọc hiểu - đọc điền: định hình được cấu trúc và nội dung đọc hiểu - đọc điền, nắm các dạng câu hỏi và cách làm cho từng dạng cụ thể.Thông qua việc phân tích, so sánh các bài tập trong đề thi chính thức môn Tiếng Anh qua các năm sẽ giúp các bạn học sinh có những định hướng đúng đắn về phương pháp học tập cũng như những nội dung kiến thức trọng tâm cần chuẩn bị cho các dạng bài tập này.",
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
