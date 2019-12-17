<template>
    <view class="container">
        <button title="Добавить контакт" :onPress="goToAdd"/>
        <scroll-view style="margin-top: 10">
            <view class="contact" v-for="(contact, index) of contacts" :key="index">
                <view class="contact__info">
                    <text>{{contact.surname}} {{contact.name}} {{contact.middleName}}</text>
                    <text class="info__bold">{{contact.email}} {{contact.phoneNumber}}</text>
                </view>
                <view class="contact__buttons">
                    <touchable-opacity :onPress="() => goToEdit(contact.id)">
                        <image
                                style="width: 25; height: 25;"
                                :source="require('../img/pencil-edit-button.png')"
                        />
                    </touchable-opacity>
                    <touchable-opacity :onPress="() => deleteContact(contact.id)">
                        <image
                                style="width: 25; height: 25;"
                                :source="require('../img/rubbish-bin.png')"
                        />
                    </touchable-opacity>
                </view>
            </view>
        </scroll-view>
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
        data() {
            return {
            }
        },
        methods: {
            goToEdit(id) {
                store.commit('SET_CHANGING_CONTACT', {id:id})
                this.navigation.navigate('Edit', 'name')
            },
            goToAdd() {
                this.navigation.navigate('Add')
            },
            deleteContact(id) {
                store.commit('DELETE_CONTACT', {id:id})
            }
        },
        computed: {
            contacts() {
                return store.state.contacts
            }
        }

    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 20;
    }

    .contact {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        border-color: black;
        border-width: 0.5;
        padding: 10;
        border-radius: 5;
        margin-top: 10;
    }

    .contact__buttons {
        width: 20%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }

    .info__bold {
        font-weight: bold;
    }
</style>