import Vue from 'vue-native-core'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        changingContact: null,
        contacts: [
            {
                id: 1,
                name: 'Никита',
                surname: 'Ескин',
                middleName: 'Алексеевич',
                email: 'n-eskin@bk.ru',
                phoneNumber: '89859577153'
            },
            {
                id: 2,
                name: 'Игорь',
                surname: 'Иванов',
                middleName: 'Иванович',
                email: 'igorek@bk.ru',
                phoneNumber: '89677473767'
            },
            {
                id: 3,
                name: 'Виктор',
                surname: 'Громов',
                middleName: 'Валерьевич',
                email: 'gromov@bk.ru',
                phoneNumber: '89877653674'
            },
            {
                id: 4,
                name: 'Елена',
                surname: 'Карпова',
                middleName: 'Геннадьевна',
                email: 'lenalena@bk.ru',
                phoneNumber: '89765321534'
            },
            {
                id: 5,
                name: 'Евгение',
                surname: 'Баженов',
                middleName: 'Владиславович',
                email: 'bbzhzhzh@bk.ru',
                phoneNumber: '89659377163'
            }
        ]
    },
    mutations: {
        DELETE_CONTACT(state, id) {
            const deletedIndex = state.contacts.findIndex(el => el.id === id.id)
            state.contacts.splice(deletedIndex, 1)
        },
        ADD_CONTACT(state, contact) {
            state.contacts.push(contact)
        },
        SET_CHANGING_CONTACT(state, id) {
            state.changingContact = state.contacts.find(el => el.id === id.id)
        },
        UPDATE_CONTACT(state, contact) {
            const updatedContact = state.contacts.find(el => el.id === contact.contact.id)
            console.log(updatedContact)
            Object.assign(updatedContact, contact.contact)
        }
    },
    actions: {

    },
    getters: {

    }
})

export default store;