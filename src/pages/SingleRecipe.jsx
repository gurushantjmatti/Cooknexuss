import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
    const { data, setdata } = useContext(recipecontext);
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: recipe.title,
            chef: recipe.chef,
            image: recipe.image,
            inst: recipe.inst,
            desc: recipe.desc,
            ingr: recipe.ingr,
        },
    });

    const SubmitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setdata(copydata);
        toast.success("Recipe updated!");
    };

    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata);
        toast.success("recipe deleted!");
        navigate("/recipes");
    };

    useEffect(() => {
        console.log("SingleRecipe.jsx Mounted");
        return () => {
            console.log("SingleRecipe.jsx Unmount");
        };
    }, []);

    return recipe ? (
        <div className="w-full flex flex-col md:flex-row bg-gray-900 rounded-xl shadow-lg p-6 md:p-10 mt-8 max-w-4xl mx-auto gap-8">
            <div className="left md:w-1/2 w-full flex flex-col items-center md:items-start gap-4">
                <h1 className="text-4xl md:text-5xl font-black text-white-900 mb-2 text-center md:text-left">
                    {recipe.title}
                </h1>
                <img
                    className="h-[25vh] w-full object-cover rounded-lg shadow-md border border-gray-200"
                    src={recipe.image}
                    alt=""
                />
                <h2 className="text-lg font-semibold text-white-700">
                    By {recipe.chef}
                </h2>
                <p className="text-white-600 text-base mt-2">{recipe.desc}</p>
            </div>

            <form
                className="md:w-1/2 w-full flex flex-col gap-4 bg-gray-200 rounded-lg shadow p-6"
                onSubmit={handleSubmit(SubmitHandler)}
            >
                <label className="font-semibold text-gray-900">Image URL</label>
                <input
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                    {...register("image")}
                    type="url"
                    placeholder="Enter Image Url"
                />
                <small className="text-red-400 mb-2">
                    Enter only image URL
                </small>

                <label className="font-semibold text-gray-900">Recipe Title</label>
                <input
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                />

                <label className="font-semibold text-gray-900">Chef Name</label>
                <input
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                />

                <label className="font-semibold text-gray-900">Description</label>
                <textarea
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 min-h-[60px] resize-vertical"
                    {...register("desc")}
                    placeholder="Start from here"
                ></textarea>

                <label className="font-semibold text-gray-900">Ingredients</label>
                <textarea
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 min-h-[60px] resize-vertical"
                    {...register("ingr")}
                    placeholder="Write ingredients separated by comma"
                ></textarea>

                <label className="font-semibold text-gray-900">Instructions</label>
                <textarea
                    className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 min-h-[60px] resize-vertical"
                    {...register("inst")}
                    placeholder="Write instructions separated by comma"
                ></textarea>

                <label className="font-semibold text-gray-900">Category</label>
                <select
                    className="block border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 transition-colors shadow"
                >
                    Update Recipe
                </button>
                <button
                    type="button"
                    onClick={DeleteHandler}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-3 transition-colors shadow mt-2"
                >
                    Delete Recipe
                </button>
            </form>
        </div>
    ) : (
        <div className="flex justify-center items-center h-[50vh] text-xl text-gray-500">
            Loading...
        </div>
    );
};

export default SingleRecipe;
