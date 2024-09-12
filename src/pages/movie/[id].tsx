import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.id} 영화 상세페이지</h1>
    </div>
  );
}
