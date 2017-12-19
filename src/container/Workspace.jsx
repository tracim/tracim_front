import React from 'react'
import { connect } from 'react-redux'
import Folder from '../component/Workspace/Folder.jsx'
import FileItem from '../component/Workspace/FileItem.jsx'
import FileItemHeader from '../component/Workspace/FileItemHeader.jsx'
import Thread from './Thread.jsx'
// import PageText from './PageText.jsx'
import PageWrapper from '../component/common/layout/PageWrapper.jsx'
import PageTitle from '../component/common/layout/PageTitle.jsx'
import PageContent from '../component/common/layout/PageContent.jsx'
import DropdownCreateButton from '../component/common/Input/DropdownCreateButton.jsx'

class Workspace extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeFileType: ''
    }
  }

  render () {
    return (
      <PageWrapper customeClass='workspace'>
        <PageTitle
          parentClass='workspace__header'
          customClass='justify-content-between'
          title='Documents & Fichiers'
        >
          <DropdownCreateButton parentClass='workspace__header__btnaddworkspace' />
        </PageTitle>

        <PageContent parentClass='workspace__content'>

          <div className='workspace__content__fileandfolder folder__content active'>
            <FileItemHeader />

            <FileItem
              name='Facture 57841 - Pierre Maurice - 06/06/2017'
              type='file'
              status='current'
              onClickItem={() => this.setState({activeFileType: 'file'})}
            />
            <FileItem
              name='Facture 57840 - Jean-michel Chevalier - 04/09/2017'
              type='file'
              status='validated'
              onClickItem={() => this.setState({activeFileType: 'file'})}
            />
            <FileItem
              name='Discussions à propos du nouveau système de facturation'
              type='chat'
              status='canceled'
              onClickItem={() => this.setState({activeFileType: 'chat'})}
            />

            <Folder>
              <FileItem type='file' name='Facture 57839 - Société ABC - 01/09/2017' status='current' />
              <FileItem type='file' name='Facture 57839 - Société ABC - 01/09/2017' status='current' />
              <FileItem type='task' name='Editer la facture pour Phillipe GIRARD' status='validated' />

              <Folder>
                <FileItem type='chat' name='Discussions à propos du nouveau système de facturation' status='canceled' />
                <FileItem type='file' name='Facture 57537 - Claudia Martin - 14/08/2017' status='validated' />
              </Folder>

              <FileItem name='Facture 57841 - Pierre Maurice - 06/06/2017' type='file' status='current' />
              <FileItem type='file' name='Facture 57840 - Jean-michel Chevalier - 04/09/2017' status='validated' />
              <FileItem name='Facture 57841 - Pierre Maurice - 06/06/2017' type='file' status='current' />

              <Folder>
                <FileItem type='chat' name='Discussions à propos du nouveau système de facturation' status='canceled' />
                <FileItem type='file' name='Facture 57537 - Claudia Martin - 14/08/2017' status='validated' />
              </Folder>
            </Folder>
          </div>

          <DropdownCreateButton customClass='workspace__content__button mb-5' />

          <Thread visible={this.state.activeFileType === 'chat'} />
          {/*
          <PageText visible={this.state.activeFileType === 'file'} />
          */}
        </PageContent>

      </PageWrapper>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Workspace)