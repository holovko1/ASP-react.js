import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import APP_ENV from "../../../env";

const CategoryEditPage = () => {

    return (
        <>
            <div className={"container"}>
                <h1 className={"text-center"}>Редагувати категорію</h1>
                <form className={"col-md-6 offset-md-3"}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Назва</label>
                        <input type="text"/>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Вкажіть опис"></textarea>
                        <label htmlFor="description">Опис</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageFile" className="form-label">Фото</label>
                        <input className="form-control" type="file" id="imageFile" name={"imageFile"}/>
                    </div>

                    <div className="mb-3 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-info mx-2">Скасувати</Link>
                        <button type="submit" className="btn btn-primary">Редагувати</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CategoryCreatePage;