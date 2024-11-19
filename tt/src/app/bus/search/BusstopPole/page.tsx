import React from 'react'
import { Suspense } from 'react'
import SearchBox from '@/app/ui/bus/searchBox'
import BusstopPoleTable from '@/app/ui/bus/busstopPole-table';
// import { BusstopPole } from '@/app/class/classes';

const queryName = 'title';

export default async function Page(props: {
  searchParams?: Promise<{
    [queryName]?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.[queryName] || '';
  return (
    <div>
      {/* <MapLib /> */}
      <SearchBox placeholder="検索" queryName={queryName} />
      <Suspense key={query} fallback={<p>検索中</p>}>
        <BusstopPoleTable titleQuery={query} />
      </Suspense>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim rem neque veniam magni praesentium aperiam quasi et mollitia aut. Quasi ad consequuntur voluptate dignissimos atque maxime corporis magni voluptates.</p>
      <p>Deleniti perferendis veniam alias magnam possimus illum praesentium tenetur aspernatur labore inventore laboriosam quasi ducimus doloremque, temporibus cumque aliquid nam recusandae necessitatibus. Ullam, porro facilis. Maiores soluta quasi dolores minus.</p>
      <p>Repudiandae commodi vel numquam vero et cum fugit nesciunt corrupti exercitationem libero autem reiciendis ea nulla aliquid suscipit, rerum praesentium eius enim. Esse sed minus, optio necessitatibus sunt iure odit?</p>
      <p>Soluta assumenda magnam perspiciatis blanditiis illo sint molestiae tempora commodi laudantium eligendi perferendis sit, iste quo doloribus illum, nisi placeat aut, quia laboriosam! Repellat est dolore placeat. Dolorum, suscipit laborum!</p>
      <p>Ratione, cumque eveniet. Maiores ad, omnis minus iste autem sequi animi dolore sunt itaque harum assumenda reprehenderit, soluta placeat quo adipisci aperiam nobis vel doloribus laborum eum necessitatibus nemo quidem?</p>
      <p>Perspiciatis, quibusdam eius! Hic exercitationem ullam aliquam tenetur beatae nisi a natus modi similique magnam. Dolorum, alias. Ratione voluptatibus quidem, esse dolorum ducimus maxime laudantium voluptatem, nulla illo exercitationem soluta.</p>
      <p>Incidunt debitis praesentium modi, magni suscipit, doloremque blanditiis deserunt voluptatem quod aut rerum similique officia dolorem at molestias fugiat nihil, sequi ipsum. Alias omnis molestias maiores pariatur officia consectetur sequi?</p>
      <p>Optio, similique! Libero nulla nobis numquam qui eaque? Omnis, reiciendis dolorum, praesentium ratione asperiores expedita iste iure ab, a aperiam odit placeat. Accusantium itaque dolores laborum, veniam commodi voluptatem assumenda.</p>
      <p>Est error nostrum quas suscipit, voluptatem debitis itaque amet nihil, ab dolor exercitationem saepe possimus necessitatibus quam alias odit fugit iure autem? Deleniti laudantium architecto excepturi pariatur totam iure. Enim?</p>
      <p>Neque suscipit blanditiis adipisci ipsa rem harum sequi! Quis repellat fugiat facere sit in incidunt sequi beatae, similique at? Fuga autem nam corporis aliquam tempore eum quas itaque dolore quam.</p> */}
    </div>
  )
}
