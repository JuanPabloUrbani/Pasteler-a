import {Suppliers} from '../models/suppliers.js';

export class SuppliersClass {
    static async newSupplier(data){
        const newSupplier = new Suppliers(data);
        await newSupplier.save();
        return newSupplier;
    }
    static async allSuppliers(){
        return Suppliers.find();
    }
    static async updateSuppliers(id,data){
        return Suppliers.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteSuppliers(id){
        return Suppliers.findByIdAndDelete(id);
    }
}