import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Accounts from '@/components/Accounts'
import ExistingAccount from '@/components/Accounts_Record'
import NewAccount from '@/components/Accounts_New'
import Contacts from '@/components/Contacts'
import ExistingContact from '@/components/Contacts_Record'
import NewContact from '@/components/Contacts_New'
import Relationships from '@/components/Relationships'
import ExistingRelationship from '@/components/Relationships_Record'
import NewRelationship from '@/components/Relationships_New'
import CSVCreation from '@/components/CSV_Creation'
import FundSources from '@/components/Fund_Sources'
import NewFundSource from '@/components/Fund_Sources_New'
import ExistingFundSource from '@/components/Fund_Sources_Record'
import Leads from '@/components/Leads'
import NewLead from '@/components/Leads_New'
import ExistingLead from '@/components/Leads_Record'
import SupportItems from '@/components/Support_Items'
import NewSupportItem from '@/components/Support_Items_New'
import ExistingSupportItem from '@/components/Support_Items_Record'
import Products from '@/components/Products'
import NewProduct from '@/components/Products_New'
import ExistingProduct from '@/components/Products_Record'
import Plans from '@/components/Plans'
import ExistingPlan from '@/components/Plans_Record'
import NewPlan from '@/components/Plans_New'
import Jobs from '@/components/Jobs'
import ExistingJob from '@/components/Jobs_Record'
import NewJob from '@/components/Jobs_New'
import Reports from '@/components/Reports'
import Settings from '@/components/Settings'
import UserProfile from '@/components/User_Profile'
import ExistingFundCategory from '@/components/Fund_Categories_Record'
import NewFundCategory from '@/components/Fund_Categories_New'
import AllPages from '@/components/All_Pages'

Vue.use( Router )

export default new Router( {
	routes: [ {
		path: '/',
		component: Home,
		name: 'Home'
	}, {
		path: '/AllPages',
		component: AllPages,
		name: 'AllPages'
	}, {
		path: '/SupportItems',
		component: SupportItems,
		name: 'SupportItems'
	}, {
		path: '/NewSupportItem',
		component: NewSupportItem,
		name: 'NewSupportItem'
	}, {
		path: '/ExistingSupportItem',
		component: ExistingSupportItem,
		name: 'ExistingSupportItem'
	}, {
		path: '/ExistingSupportItem/:supportItemId',
		component: ExistingSupportItem,
		name: 'ExistingSupportItem'
	}, {
		path: '/Relationships',
		component: Relationships,
		name: 'Relationships'
	}, {
		path: '/NewRelationship',
		component: NewRelationship,
		name: 'NewRelationship'
	}, {
		path: '/ExistingRelationship',
		component: ExistingRelationship,
		name: 'ExistingRelationship'
	}, {
		path: '/Products',
		component: Products,
		name: 'Products'
	}, {
		path: '/NewProduct',
		component: NewProduct,
		name: 'NewProduct'
	}, {
		path: '/ExistingProduct',
		component: ExistingProduct,
		name: 'ExistingProduct'
	}, {
		path: '/ExistingProduct/:productCode',
		component: ExistingProduct,
		name: 'ExistingProduct'
	}, {
		path: '/Jobs',
		component: Jobs,
		name: 'Jobs'
	}, {
		path: '/NewJob',
		component: NewJob,
		name: 'NewJob'
	}, {
		path: '/ExistingJob',
		component: ExistingJob,
		name: 'ExistingJob'
	}, {
		path: '/ExistingJob/:jobId',
		component: ExistingJob,
		name: 'ExistingJob'
	}, {
		path: '/Accounts',
		component: Accounts,
		name: 'Accounts'
	}, {
		path: '/Contacts',
		component: Contacts,
		name: 'Contacts'
	}, {
		path: '/CSVCreation',
		component: CSVCreation,
		name: 'CSVCreation'
	}, {
		path: '/FundSources',
		component: FundSources,
		name: 'FundSources'
	}, {
		path: '/ExistingFundSource',
		component: ExistingFundSource,
		name: 'ExistingFundSource'
	}, {
		path: '/NewFundSource',
		component: NewFundSource,
		name: 'NewFundSource'
	}, {
		path: '/Leads',
		component: Leads,
		name: 'Leads'
	}, {
		path: '/Plans',
		component: Plans,
		name: 'Plans'
	}, {
		path: '/NewPlan',
		component: NewPlan,
		name: 'NewPlan'
	}, {
		path: '/Reports',
		component: Reports,
		name: 'Reports'
	}, {
		path: '/Settings',
		component: Settings,
		name: 'Settings'
	}, {
		path: '/NewLead',
		component: NewLead,
		name: 'NewLead'
	}, {
		path: '/ExistingLead',
		component: ExistingLead,
		name: 'ExistingLead'
	}, {
		path: '/ExistingPlan',
		component: ExistingPlan,
		name: 'ExistingPlan'
	}, {
		path: '/ExistingPlan/:planId',
		component: ExistingPlan,
		name: 'ExistingPlan'
	}, {
		path: '/ExistingAccount',
		component: ExistingAccount,
		name: 'ExistingAccount'
	}, {
		path: '/ExistingAccount/:accountId',
		component: ExistingAccount,
		name: 'ExistingAccount'
	}, {
		path: '/NewAccount',
		component: NewAccount,
		name: 'NewAccount'
	}, {
		path: '/ExistingContact',
		component: ExistingContact,
		name: 'ExistingContact'
	}, {
		path: '/ExistingFundCategory',
		component: ExistingFundCategory,
		name: 'ExistingFundCategory'
	}, {
		path: '/NewFundCategory',
		component: NewFundCategory,
		name: 'NewFundCategory'
	}, {
		path: '/NewContact',
		component: NewContact,
		name: 'NewContact'
	}, {
		path: '/UserProfile',
		component: UserProfile,
		name: 'UserProfile'
	} ],
	mode: 'history',
	scrollBehavior( to, from, savedPosition ) {
		return {
			x: 0,
			y: 0
		}
	}
} )