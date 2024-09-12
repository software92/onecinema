import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  return (
    <div>
      <h1>검색 결과: {router.query.q || "검색어를 입력해주세요."}</h1>
    </div>
  );
}
