<template>
  <b-container class="pt-5">
    <b-row align-h="between" class="w-100 mr-0 ml-0">
      <b-col cols="12" sm="8">
        <div class="title">House Rules Registration</div>
      </b-col>
      <b-col cols="12" sm="4" class="d-flex justify-content-end mt-2">
        <b-button variant="warning" class="button-crud">
          <div class="text-button">Cancel</div>
        </b-button>
        <b-button variant="danger" class="ml-2 button-crud" :disabled="!houseRules.id" @click="deleteHouseRule()">
          <div class="text-button">Remove</div>
        </b-button>
        <b-button variant="success" class="ml-2 button-crud" :disabled="houseRules.name.length === 0 ? true : false" @click="save()">
          <div class="text-button">Save</div>
        </b-button>
      </b-col>
    </b-row>

    <b-form class="mt-4 px-3">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="Please, be sure that you'll make the house a better place"
      >
      <b-row class="w-100 mx-0">
        <b-col cols="12" sm="8" class="px-0 pr-sm-2 mt-2">
          <b-form-input
            id="input-1"
            v-model="houseRules.name"
            type="email"
            placeholder="New rule"
            required
          ></b-form-input>
        </b-col>
        <b-col cols="12" sm="4" class="px-0 mt-2">
          <b-form-select v-model="houseRules.active" :options="optionsActive"></b-form-select>
        </b-col>
      </b-row>
      </b-form-group>
    </b-form>

    <div class="separator"></div>

    <b-row>
      <b-col v-for="(rule, index) in listHouseRules" :key="index" cols="12" sm="6" md="4">
        <b-card
          border-variant="primary"
          :header="`Rule #${index +1}`"
          header-bg-variant="primary"
          header-text-variant="white"
          header-class="header-text"
          align="center"
          class="mb-2 w-100 my-card"
          @click="fetchSpecificHouseRule(rule)"
        >
          <b-card-text>
            {{rule.name}}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
import api from '../services/api';

export default {
  name: 'HomeComponent',
  data() {
    return {
      houseRules: {
        id: null,
        name: '',
        active: 1,
        order: 0,
      },
      optionsActive: [
        {
          value: 0,
          text: 'Non active'
        },
        {
          value: 1,
          text: 'Active'
        },
      ],
      selectedActive: null,
      listHouseRules: [],
      token: '',
    };
  },
  async mounted(){
    this.token = localStorage.getItem('token');
    await this.fetchHouseRules();
  },
  methods: {
    async fetchHouseRules() {
      try {
        const { data } = await api.get('/house_rules', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

        this.listHouseRules = data.data.entities;

      } catch (error) {
        alert('Error at @GET requisition', error);
      }
    },
    async fetchSpecificHouseRule(rule) {
      try {
        const { data } = await api.get(`/house_rules/${rule.id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

        this.houseRules = data.data;

      } catch (error) {
        alert('Error at specific rule @GET requisition', error);
      }
    },
    save() {
      if(!this.houseRules.id) {
        this.createHouseRule();
      } else {
        this.updateHouseRule();
      }
    },
    async createHouseRule() {
      try {
        await api.post(`/house_rules`, { house_rules: this.houseRules }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

        await this.fetchHouseRules();
      } catch (error) {
        alert('Error at @POST creation requisition', error);
      }
    },
    async updateHouseRule() {
      try {
        await api.put(`/house_rules/${this.houseRules.id}`, { house_rules: this.houseRules }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

        await this.fetchHouseRules();
      } catch (error) {
        alert('Error at @PUT requisition', error);
      }
    },
    async deleteHouseRule() {
      try {
        await api.delete(`/house_rules/${this.houseRules.id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

        await this.fetchHouseRules();
      } catch (error) {
        alert('Error at @DELETE requisition', error);
      }
    }
  },
};
</script>
  
<style lang="scss" scoped>
.button-crud {
  width: 200px;
}
.title {
  font-size: 26px;
  color: #303030;
  font-weight: 700;
}

.text-button {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
}

.separator {
  border-bottom: 1px solid #cccccc;
  width: 100%;
  margin: 20px 0px;
}

.header-text {
  font-size: 24px;
  font-weight: 700;
}

.my-card {
  cursor: pointer;
}
</style>

  
  
  
  
  
  