import PageHeader from '~/components/Layout/PageHeader'
import Contacts from '~/components/Advanced/Contacts'

export default function ContactsPage() {
  return (
    <div>
      <PageHeader
        title="Contacts"
        description="Track, manage and forecast your customers"
        cta1="Add"
        cta2="Import Contacts"
      />
      <div className="container grid gap-8 mb-16">
        <Contacts />
      </div>
    </div>
  )
}