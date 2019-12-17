<template>
    <view class="container">
        <text>{{ contact.name }}</text>
        <view class="add-screen__inputs-container">
            <view class="add-screen__item">
                <text>Фамилия</text>
                <text-input class="add-screen__input" v-model="contact.surname"/>
            </view>
            <view class="add-screen__item">
                <text>Имя</text>
                <text-input class="add-screen__input" v-model="contact.name"/>
            </view>
            <view class="add-screen__item">
                <text>Отчество</text>
                <text-input class="add-screen__input" v-model="contact.middleName"/>
            </view>
            <view class="add-screen__item">
                <text>Email</text>
                <text-input class="add-screen__input" v-model="contact.email"/>
            </view>
            <view class="add-screen__item">
                <text>Телефон</text>
                <text-input class="add-screen__input" v-model="contact.phoneNumber"/>
            </view>
        </view>
        <button title="Редактировать контакт" :onPress="updateContact"/>
    </view>
</template>

<script>
    import store from '../store/index'
    export default {
        props: {
            navigation: {
                type: Object
            }
        },
        created() {
            Object.assign(this.contact, store.state.changingContact)
        },
        data() {
            return {
                contact: {
                    surname: '',
                    name: '',
                    middleName: '',
                    email: '',
                    phoneNumber:''
                }
            }
        },
        methods: {
            updateContact() {
                store.commit('UPDATE_CONTACT', {contact: this.contact})
                this.navigation.navigate('Main')
            }
        },
        computed: {

        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 20;
    }
    .add-screen__input {
        width: 100%;
        height: 40;
        borderColor: gray;
        borderWidth: 1;
        padding-left: 5;
        padding-right: 5;
        border-radius: 5;
    }

    .add-screen__inputs-container {
        margin-bottom: 20;
    }

    .add-screen__item {
        margin-bottom: 10;
    }
    .cancelButton {
        margin-top: 25;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
</style>