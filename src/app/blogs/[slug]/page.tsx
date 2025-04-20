import BlogsDetail from "@/screens/blogs/slug";

export default function PostDetails() {
  return <BlogsDetail></BlogsDetail>;
}

//Hàm này chỉ chạy phía server và client không chạy
//Next js có hỗ trợ fetch api
// export async function getStaticProps({ params }) {
//   const data = await getPostDetail(params.slug);

//   return {
//     props: {
//       //Có thể map lại data cần thiết (lọc data cần show ra ngoài client)
//       //Nếu dữ liệu mà nhiều quá thì cắt bớt
//       // Dữ liệu này sẽ được show ra ở file source trên browser
//       post: data,
//     },
//   };
// }

//ở chế độ dev mode thì user gửi request lên thì nó sẽ tạo ra file và trả về
//Còn ở chế độ product thì những file này nó đã được tạo ra rồi và
// user gửi request thì trả về file html đã được tạo cho user luôn
// export async function getStaticPaths() {
//   const posts = await getPosts();

//   //Path là một mảng các object, có bao nhiều giá trị thì sẽ trả về bấy nhiêu file html
//   //Khi lên trăm ngàn thì phải sử dụng ICR
//   //slug hay id thì tùy vào đường dẫn
//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     //fallback: true ->
//     //fallback: false -> nếu không có slug match thì trả về notfound
//     //fallback: blocking ->
//     fallback: false, //or true || blocking
//   };
// }
