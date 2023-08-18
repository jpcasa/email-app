import PageHeader from '~/components/Layout/PageHeader'
import Templates from '~/components/DataDisplay/Templates'
import Campaigns from '~/components/Advanced/Campaigns'

export default function CampaignsPage() {
  return (
    <div>
      <PageHeader title="Campaigns" description="Track, manage and analyze your campaigns and templates" cta1={null} />
      <div className="container grid gap-8 mb-16">
        <Templates />
        <Campaigns />
      </div>
    </div>
  )
}