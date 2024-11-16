import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import APP_ENV from "../../../env";

const ProductEditPage = () => {

    return (
        <>
            <div className={"container"}>
                <h1 className={"text-center"}>Редагувати продукт</h1>
                <form className={"col-md-6 offset-md-3"}>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Назва</label>
                        <input type="text" className="form-control"
                               id="name" name={"name"}
                               value={data.name}
                               onChange={handlerOnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageFile" className="form-label">Фото</label>
                        <input className="form-control" type="file" id="imageFile" name={"imageFile"}
                               multiple={true} onChange={handlerOnFilesChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Ціна</label>
                        <input type="text" className="form-control"
                               id="price" name={"price"}
                               value={data.price}
                               onChange={handlerOnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">Категорія</label>
                        <input type="text" className="form-control"
                               id="categoryId" name={"categoryId"}
                               value={data.categoryId}
                               onChange={handlerOnChange}
                        />
                    </div>

                    <div className="mb-3 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-info mx-2">Скасувати</Link>
                        <button type="submit" className="btn btn-primary">Додати</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CategoryCreatePage;