import { BlitzPage } from "blitz"
import React from "react"
import EditForm from "app/components/templates/EditForm"
import Layout from "../../../layouts/Layout"


type EditPageProps= {
  userId: string;
}

const EditPage:BlitzPage<EditPageProps> = ({userId} ) => {
  return (
    //<div>
    //  <h1>ユーザ情報変更</h1>
    //
    //  {userId}
    //</div>
    <EditForm onSuccess={()=>console.log(userId)} />
  )
}

EditPage.getLayout = (page) => <Layout title="EditUser">{page}</Layout>

export default EditPage;
