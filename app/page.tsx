import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> CodyWallace.dev | My Portfolio
      </h1> 
      <p className="mb-4">
        {`I'm a software engineer and economist specializing in public finance and digital governance. 
        With over a decade of experience at the intersection of digital transformation 
        and global development, my work has taken me through multilateral organizations 
        and development financing networks, where I’ve led efforts to enhance aid coordination, 
        strengthen transparency, and build data-driven systems that inform strategic decision-making.`}
      </p>
      <p className="mb-4">
        {`I'm interested in how political economy and emerging technologies can be 
        brought together to address complex challenges and support smarter policy decisions. 
        In my current role with the International Aid Transparency Initiative (IATI), I focus 
        on leveraging data to improve aid coordination and integrate transparency into country-level systems.`}
      </p>
      <p className="mb-4">
        {`This site is part blog, part playground — where I share analytical blogs, ongoing projects, 
        and document my continuous learning journey! My passion is building tools that are equitable, 
        and help users navigate the complexities of international development finance and digital governance.`}
      </p>
      <div className="my-8">
        {/*<BlogPosts />*/}
      </div>
    </section>
  )
}
