/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
const roleId = parseInt(localStorage.getItem('role') || '0', 10)

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' />
      <SidebarMenuItem
        to='/test-page'
        icon='element-11'
        title='Test Page'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/user-managemnet-list'
        icon='element-11'
        title='User Management'
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>My Profile</span>
        </div>
      </div> */}

      {roleId === 2 && (
        <SidebarMenuItemWithSub
          title='Account'
          to='/alumni/account'
          fontIcon='bi-person'
          icon='profile-circle'
        >
          <SidebarMenuItem title='Overview' to='/alumni/account/overview' icon='archive' />
          <SidebarMenuItem title='Settings' to='/alumni/account/settings' icon='setting-2' />
          <SidebarMenuItem title='Skills' to='/alumni/account/skills' icon='yii' />
          <SidebarMenuItem title='Academics' to='/alumni/account/academics' icon='classmates' />
          <SidebarMenuItem title='Work' to='/alumni/account/work' icon='badge' />
          <SidebarMenuItem title='Survey' to='/alumni/account/survey' icon='information-4' />
          {/* <SidebarMenuItem title='User Management' to='/alumni/dsu/usermanagement' icon='information-4' /> */}
        </SidebarMenuItemWithSub>
      )}

      {/* <SidebarMenuItemWithSub
        title='Job'
        to='/alumni/jobPost'
        fontIcon='bi-person'
        icon='profile-circle'
      >
        <SidebarMenuItem title='JobPost' to='/alumni/jobPost/jobPosting' icon='archive' />
        <SidebarMenuItem title='View Jobs' to='/alumni/viewJobs/viewAllJobs' icon='archive' />
      </SidebarMenuItemWithSub>
       */}
      {/* <SidebarMenuItem
        to='/alumni/dsu/jobs'
        icon='element-11'
        title='Jobs'
        fontIcon='bi-app-indicator'
      /> */}
      <SidebarMenuItemWithSub
        to='/alumni/dsu'
        icon='element-11'
        title='Jobs'
        fontIcon='bi-app-indicator'
      >
        <SidebarMenuItem title='Jobs' to='/alumni/dsu/jobs' icon='subtitle' />
        {roleId === 1 && (
          <SidebarMenuItem title='Approve Jobs' to='/alumni/dsu/approvejobs' icon='archive' />
        )}
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub title='Events' to='/alumni/dsu' fontIcon='bi-person' icon='note-2'>
        <SidebarMenuItem title='Events' to='/alumni/dsu/event' icon='note-2' />
        <SidebarMenuItem title='News' to='/alumni/dsu/news' icon='note' />
      </SidebarMenuItemWithSub>

      <SidebarMenuItem
        to='/alumni/dsu/card'
        icon='element-11'
        title='Alumni Card'
        fontIcon='bi-app-indicator'
      />

      <SidebarMenuItem
        to='/alumni/dsu/corporate'
        icon='element-11'
        title='Corporate Partner'
        fontIcon='bi-app-indicator'
      />
      {roleId === 1 && (
        <SidebarMenuItem
          to='/alumni/dsu/directory'
          icon='element-11'
          title='Alumni Directory'
          fontIcon='bi-app-indicator'
        />
      )}
      <SidebarMenuItem
        to='/alumni/dsu/donation'
        icon='element-11'
        title='Donations'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/alumni/dsu/testimonial'
        icon='element-11'
        title='Testimonial'
        fontIcon='people'
      />
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='element-plus'
      >
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='User management'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='code' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}

export {SidebarMenuMain}
