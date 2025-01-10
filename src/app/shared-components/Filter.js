import styles from "./Filter.module.css";
import { GenderIntersex, Cake, Ruler } from "@phosphor-icons/react/dist/ssr";

export default function Filter({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.filters}>
      <fieldset>
        <legend>
          Sesso
          <GenderIntersex size={26} style={{ marginLeft: "-5px" }} />
        </legend>
        <label>
          <input
            type="checkbox"
            checked={filters.sesso.includes("Maschio")}
            onChange={(e) =>
              handleChange(
                "sesso",
                e.target.checked
                  ? [...filters.sesso, "Maschio"]
                  : filters.sesso.filter((value) => value !== "Maschio")
              )
            }
          />
          Maschio
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.sesso.includes("Femmina")}
            onChange={(e) =>
              handleChange(
                "sesso",
                e.target.checked
                  ? [...filters.sesso, "Femmina"]
                  : filters.sesso.filter((value) => value !== "Femmina")
              )
            }
          />
          Femmina
        </label>
      </fieldset>

      <fieldset>
        <legend>
          Taglia <Ruler size={26} />
        </legend>
        <label>
          <input
            type="checkbox"
            checked={filters.taglia.includes("piccola")}
            onChange={(e) =>
              handleChange(
                "taglia",
                e.target.checked
                  ? [...filters.taglia, "piccola"]
                  : filters.taglia.filter((value) => value !== "piccola")
              )
            }
          />
          Piccola
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.taglia.includes("media")}
            onChange={(e) =>
              handleChange(
                "taglia",
                e.target.checked
                  ? [...filters.taglia, "media"]
                  : filters.taglia.filter((value) => value !== "media")
              )
            }
          />
          Media
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.taglia.includes("grande")}
            onChange={(e) =>
              handleChange(
                "taglia",
                e.target.checked
                  ? [...filters.taglia, "grande"]
                  : filters.taglia.filter((value) => value !== "grande")
              )
            }
          />
          Grande
        </label>
      </fieldset>

      <fieldset>
        <legend>
          Età <Cake size={26} />
        </legend>
        <label>
          <input
            type="checkbox"
            checked={filters.età.includes("cucciolo")}
            onChange={(e) =>
              setFilters({
                ...filters,
                età: e.target.checked
                  ? [...filters.età, "cucciolo"]
                  : filters.età.filter((value) => value !== "cucciolo"),
              })
            }
          />
          Fino a 1 anno
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.età.includes("adulto")}
            onChange={(e) =>
              setFilters({
                ...filters,
                età: e.target.checked
                  ? [...filters.età, "adulto"]
                  : filters.età.filter((value) => value !== "adulto"),
              })
            }
          />
          1 - 4 anni
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.età.includes("anziano")}
            onChange={(e) =>
              setFilters({
                ...filters,
                età: e.target.checked
                  ? [...filters.età, "anziano"]
                  : filters.età.filter((value) => value !== "anziano"),
              })
            }
          />
          5 e oltre
        </label>
      </fieldset>
    </div>
  );
}
