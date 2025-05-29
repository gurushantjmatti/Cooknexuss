import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe]);
        toast.success("New recipe created!");
        reset();
        navigate("/recipes");
    };

    return (
        <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="max-w-lg mx-auto mt-10 bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col gap-5 text-gray-900"
        >
            <div>
                <input
                    {...register("image")}
                    type="url"
                    placeholder="Enter Image Url"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                />
                <small className="text-red-400 block mt-1">
                    Only use image url
                </small>
            </div>
            <div>
                <input
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                />
            </div>
            <div>
                <input
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                />
            </div>
            <div>
                <textarea
                    {...register("desc")}
                    placeholder="Description of the recipe"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 min-h-[60px] resize-vertical"
                ></textarea>
            </div>
            <div>
                <textarea
                    {...register("ingr")}
                    placeholder="Write ingredients separated by comma"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 min-h-[60px] resize-vertical"
                ></textarea>
            </div>
            <div>
                <textarea
                    {...register("inst")}
                    placeholder="Write instructions separated by comma"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 min-h-[60px] resize-vertical"
                ></textarea>
            </div>
            <div>
                <select
                    {...register("category")}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <button
                type="submit"
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 transition-colors"
            >
                Save Recipe
            </button>
        </form>
    );
};

export default Create;
