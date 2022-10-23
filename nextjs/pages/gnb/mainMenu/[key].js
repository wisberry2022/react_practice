import { useRouter } from 'next/router';

export default function mainMenuSub() {
  const router = useRouter();
  const key = router.query.key;

  return (
    <div>
      <a href="/">홈으로</a>
      <h1>커스텀 상품</h1>
      <div>커스텀 상품 : {key}</div>
    </div>
  )
}