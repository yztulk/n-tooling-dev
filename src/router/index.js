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
		name: 'Home',
		component: Home
	}, {
		path: '/AllPages',
		name: 'AllPages',
		component: AllPages
	}, {
		path: '/SupportItems',
		name: 'SupportItems',
		component: SupportItems
	}, {
		path: '/NewSupportItem',
		name: 'NewSupportItem',
		component: NewSupportItem
	}, {
		path: '/ExistingSupportItem',
		name: 'ExistingSupportItem',
		component: ExistingSupportItem
	}, {
		path: '/Relationships',
		name: 'Relationships',
		component: Relationships
	}, {
		path: '/NewRelationship',
		name: 'NewRelationship',
		component: NewRelationship
	}, {
		path: '/ExistingRelationship',
		name: 'ExistingRelationship',
		component: ExistingRelationship
	}, {
		path: '/Products',
		name: 'Products',
		component: Products
	}, {
		path: '/NewProduct',
		name: 'NewProduct',
		component: NewProduct
	}, {
		path: '/ExistingProduct',
		name: 'ExistingProduct',
		component: ExistingProduct
	}, {
		path: '/ExistingProduct/:productCode',
		name: 'ExistingProduct',
		component: ExistingProduct
	}, {
		path: '/Accounts',
		name: 'Accounts',
		component: Accounts
	}, {
		path: '/Contacts',
		name: 'Contacts',
		component: Contacts
	}, {
		path: '/CSVCreation',
		name: 'CSVCreation',
		component: CSVCreation
	}, {
		path: '/FundSources',
		name: 'FundSources',
		component: FundSources
	}, {
		path: '/ExistingFundSource',
		name: 'ExistingFundSource',
		component: ExistingFundSource
	}, {
		path: '/NewFundSource',
		name: 'NewFundSource',
		component: NewFundSource
	}, {
		path: '/Leads',
		name: 'Leads',
		component: Leads
	}, {
		path: '/Plans',
		name: 'Plans',
		component: Plans
	}, {
		path: '/NewPlan',
		name: 'NewPlan',
		component: NewPlan
	}, {
		path: '/Reports',
		name: 'Reports',
		component: Reports
	}, {
		path: '/Settings',
		name: 'Settings',
		component: Settings
	}, {
		path: '/NewLead',
		name: 'NewLead',
		component: NewLead
	}, {
		path: '/ExistingLead',
		name: 'ExistingLead',
		component: ExistingLead
	}, {
		path: '/ExistingPlan',
		name: 'ExistingPlan',
		component: ExistingPlan
	}, {
		path: '/ExistingAccount',
		name: 'ExistingAccount',
		component: ExistingAccount
	}, {
		path: '/ExistingAccount/:accountId',
		name: 'ExistingAccount',
		component: ExistingAccount
	}, {
		path: '/NewAccount',
		name: 'NewAccount',
		component: NewAccount
	}, {
		path: '/ExistingContact',
		name: 'ExistingContact',
		component: ExistingContact
	}, {
		path: '/ExistingFundCategory',
		name: 'ExistingFundCategory',
		component: ExistingFundCategory
	}, {
		path: '/NewFundCategory',
		name: 'NewFundCategory',
		component: NewFundCategory
	}, {
		path: '/NewContact',
		name: 'NewContact',
		component: NewContact
	}, {
		path: '/UserProfile',
		name: 'UserProfile',
		component: UserProfile
	} ],
	mode: 'history',
	scrollBehavior( to, from, savedPosition ) {
		return {
			x: 0,
			y: 0
		}
	}
} )